import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { User } from '@/types';
import * as yup from 'yup';
import { type AxiosResponse } from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthContext } from '@/context';
import { HttpClient } from '@/common';

export default function useLogin() {
	const [loading, setLoading] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	const { isAuthenticated, saveSession } = useAuthContext();

	const schemaResolver = yup.object().shape({
		email: yup
			.string()
			.email('Please enter a valid email')
			.required('Please enter Username'),
		password: yup.string().required('Please enter Password'),
	});

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schemaResolver),
		defaultValues: {
			email: 'admin@mannatthemes.com',
			password: 'password',
		},
	});

	type LoginFormFields = yup.InferType<typeof schemaResolver>;

	const redirectUrl = useMemo(
		() => (location.state?.from.pathname, '/'),
		[location.state]
	);

	const login = handleSubmit(async function (values: LoginFormFields) {
		setLoading(true);
		try {
			const res: AxiosResponse<User> = await HttpClient.post('/login', values);
			if (res.data.token) {
				saveSession({
					...(res.data ?? {}),
					token: res.data.token,
				});
				toast.success('Successfully logged in. Redirecting....', {
					position: 'top-right',
					duration: 2000,
				});
				navigate(redirectUrl);
			}
		} catch (e: any) {
			if (e.response?.data?.error) {
				toast.error(e.response?.data?.error, {
					position: 'top-right',
					duration: 2000,
				});
			}
		} finally {
			setLoading(false);
		}
	});

	return { loading, login, redirectUrl, isAuthenticated, control };
}
