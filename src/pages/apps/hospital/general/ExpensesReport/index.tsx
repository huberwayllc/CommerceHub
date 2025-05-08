import { PageBreadcrumb } from '@/components'
import { Row } from 'react-bootstrap'
import ExpensesReportCard from './components/ExpensesReportCard'
import { expensesReport } from './data'
import React from 'react'
import PurchaseExpensesTable from './components/PurchaseExpensesTable'
import StaffExpensesTable from './components/StaffExpensesTable'

const ExpensesReport = () => {
	return (
		<>
			<PageBreadcrumb subName="Hospital" title="Expenses" />
			<div>
				<Row className="justify-content-center">
					{(expensesReport || []).map((expens, idx) => (
						<React.Fragment key={idx}>
							<ExpensesReportCard expense={expens} />
						</React.Fragment>
					))}
				</Row>
				<PurchaseExpensesTable />
				<StaffExpensesTable />
			</div>
		</>
	)
}

export default ExpensesReport
