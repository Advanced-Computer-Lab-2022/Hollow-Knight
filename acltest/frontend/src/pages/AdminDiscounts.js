import AdminDiscountCourses from '../components/AdminDiscountCourses'
import AdminNav from '../components/AdminNav'

const AdminDiscounts = () => {
    return(
        <div className="AdminDiscounts">
        <AdminNav />
        <div>
            <h2>Apply Discount to course</h2>
        </div>
        <div>
        <AdminDiscountCourses />
        </div>
        </div>
    )
}

export default AdminDiscounts