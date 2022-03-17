import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import { counterPlusAction, minusCounterAction } from './store/action/counterAction';


function CounterApp() {
    const dispatch = useDispatch();// for saving data in redux store.
    // const state_Counter = useSelector(myStore => myStore.counterReducer1);

    return (
        <div className="container">
            <div className="myDiv d-flex justify-content-center pt-2">
                <h1>COUNTER...</h1>

                <button onClick={() => dispatch({ type: "COUNTER_MINUS", payload: "" })}>-</button>
                {/* <p> {state_Counter} </p> */}
                <Dashboard/>
                <button onClick={() => dispatch(counterPlusAction("TAHIR"))}>+</button>
            </div>
        </div>

        //#region OLD COMMENTED CODE.
        /*<div className="container border">
    
          <div className="row">
            <div className="col-12 bg-warning">
              <h1>WebSite Name</h1>
            </div>
          </div>
    
          <div className="row">
            <div className="col-12 bg-secondary">
              <ul className="d-flex text-white list-unstyled" style={{margin: '0',padding: '10px'}}>
                <li><a>Home</a></li>&nbsp;&nbsp;&nbsp;&nbsp;
                <li><a>About</a></li>&nbsp;&nbsp;&nbsp;&nbsp;
                <li><a>Contact Us</a></li>&nbsp;&nbsp;&nbsp;&nbsp;
                <li><a>Products</a></li>
              </ul>
            </div>
          </div>
    
          <div className="row">
            <div className="col-md-9 text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eaque, voluptas placeat laudantium totam accusamus, numquam iusto dolor quo, deleniti unde quasi. Ab, veritatis. Delectus possimus tempore iure earum sit illum tempora laudantium, corporis sunt reprehenderit quos dolor alias odit sapiente laboriosam animi, voluptate, ipsum fuga! Delectus voluptate dolores aperiam repellendus ipsa, quod quam quas quos cumque qui perferendis laboriosam facilis modi esse nihil molestias odio ipsum ea aut libero tenetur eaque! Inventore eveniet qui earum asperiores natus vel facere tempore, aperiam adipisci omnis? Saepe, aperiam ipsa rerum cum adipisci eum, ratione debitis accusamus quaerat, quidem non at porro eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima quae aspernatur accusamus! Minima commodi, atque ab cum expedita quam dolorem ipsam tenetur explicabo, eaque non eveniet totam enim eos sapiente inventore assumenda, laudantium sed perspiciatis. Suscipit quis, a explicabo impedit culpa magnam, nostrum quod odio eveniet blanditiis voluptatem corrupti laborum earum deleniti beatae. Ut odio dolores itaque inventore distinctio quae architecto maxime, ullam magnam error minima numquam ad alias corrupti suscipit, excepturi assumenda! Quod enim voluptatem id neque consequatur assumenda asperiores dolores incidunt nihil, praesentium ut temporibus impedit magni corporis voluptatum debitis? Ex cum consectetur optio nihil? Laudantium consequuntur exercitationem atque dignissimos assumenda, nulla suscipit! Natus harum illo pariatur laboriosam, expedita dolorem sit, deserunt deleniti amet qui dolore aspernatur in tempora, voluptatum vitae maiores.
              </p>
            </div>
            <div className="col-md-3 bg-info  order-first">
             <h2 className="text-white">Side Bar</h2>
            </div>
          </div>
    
          <div className="row">
            <div className="col-12 bg-warning text-center text-justify font-weight-bold" style={{margin: '0', paddingTop: '0'}}>
              <p className="my-2">@copyright 2022</p>
            </div>
          </div>
        </div>*/
        //#endregion
    );
}

export default CounterApp;
