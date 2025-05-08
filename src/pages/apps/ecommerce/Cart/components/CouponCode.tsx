import { Image } from 'react-bootstrap'
import logoSm from '@/assets/images/logo-icon.svg'

const CouponCode = () => {
	return (
		<div className="text-center cart-promo">
			<Image src={logoSm} height={50} className="mb-2" />
			<h4>Have a promo code ?</h4>
			<p className="font-13">
				If you have a promocode, You can take discount !
			</p>
			<div className="input-group w-75 mx-auto">
				<input
					type="text"
					className="form-control"
					placeholder="Use Promocode"
					aria-describedby="button-addon2"
				/>
				<button
					className="btn btn-soft-primary "
					type="button"
					id="button-addon2"
				>
					Apply
				</button>
			</div>
		</div>
	)
}

export default CouponCode
