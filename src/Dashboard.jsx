import { useSelector } from "react-redux";
import Loader from "./Loader";

let Dashboard = () => {
    const states = useSelector(store => store.ApisReducer);
    if (states.flag) {
        return (
            <>
                <br></br>
                <div style={{ textAlign: "center" }}>
                    <h3>Please wait..</h3> 
                    <Loader />
                </div>
            </>
        )
    }
    else {
        return (
            <div>
                <br></br>
                <h1>Dashboard</h1>

                <table className="table table-striped border">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            states.products.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{data.id}</td>
                                        <td width={300}>{data.title}</td>
                                        <td><img src={data.image} height="110" alt="Image not found!" /></td>
                                        <td>{data.price}</td>
                                        <td>{data.description}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}
export default Dashboard;