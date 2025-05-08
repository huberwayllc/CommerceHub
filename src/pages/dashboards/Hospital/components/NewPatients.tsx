import { ComponentContainerCard } from '@/components'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { newPatients } from '../data'

const NewPatients = () => {
	return (
		<ComponentContainerCard title="New Patients" viewAll>
			<div className="table-responsive">
				<table id="datatable" className="table">
					<thead className="thead-light">
						<tr>
							<th>Patient Name</th>
							<th>Age</th>
							<th>ID</th>
							<th>Address</th>
							<th>Mobile No</th>
							<th>Last Visit</th>
							<th>Diseases</th>
							<th className="text-right">Action</th>
						</tr>
					</thead>
					<tbody>
						{newPatients.map((patient, idx) => {
							return (
								<tr key={idx}>
									<td>
										<Link to="/apps/hospital/patients/profile">
											<Image
												src={patient.image}
												className="thumb-sm rounded-circle me-2"
											/>
											{patient.name}
										</Link>
									</td>
									<td>{patient.age}</td>
									<td>#{patient.id}</td>
									<td>{patient.address}</td>
									<td>+{patient.mobileNo}</td>
									<td>{patient.lastVisit}</td>
									<td>
										<span className={`badge badge-soft-${patient.variant}`}>
											{patient.disease}
										</span>
									</td>
									<td className="text-right">
										<Link to="">
											<i className="las la-pen text-secondary font-16" />
										</Link>
										<Link to="">
											<i className="las la-trash-alt text-secondary font-16" />
										</Link>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</ComponentContainerCard>
	)
}

export default NewPatients
