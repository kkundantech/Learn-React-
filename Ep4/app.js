import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
    return (
        <div className="Header">
            <div className="logo-container">
                <img
                className="logo"
                src="https://th.bing.com/th/id/OIP.cW3C10wMDP5EpuYjdKow0gHaE8?w=284&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                />
            </div>

            <div className="nav-items">
                <ul>
                   <li>Home</li> 
                   <li>About</li> 
                   <li>Contact</li> 
                   <li>Cart</li> 
                </ul>
            </div>
        </div>
    )
    
};


const RestaurantCard = (props) =>{
    return (
        <div className="res-card">
            <img className="res-logo" src={props.piclink}/>
            <h3>{props.name}</h3>
            <h4>{props.proinfo}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.timing}</h4>
        </div>
    )
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-con">
                <RestaurantCard name="Kundan"
                proinfo= "Salad, Panjab , India" 
                piclink="https://media.self.com/photos/5ea1ac5927bb4e00087e0632/1:1/w_1066,h_1066,c_limit/mango-black-bean-salad.jpg"
                rating="4.5 Stars" 
                timing = "55 minute"
                />
                <RestaurantCard name="Nandan"
                 proinfo= "papadichat, Panjab , India"
                 piclink = "https://www.bing.com/images/search?view=detailV2&ccid=9QthBSAU&id=5F15F3591C23733485B796D8AAB7C896BB2508A8&thid=OIP.9QthBSAUA7NvD3bjQgoWWQHaFN&mediaurl=https%3a%2f%2fd2e1hu1ktur9ur.cloudfront.net%2fwp-content%2fuploads%2f2021%2f04%2fIndian-food.jpg&exph=900&expw=1280&q=food&FORM=IRPRST&ck=381529F7B2BE8E4580E480E7E5AD1180&selectedIndex=9&itb=0" 
                 rating="5.0 Stars"
                 timing = "30 minute"
                 />
            </div>
          

        </div>
    )
};


const Applayout = () =>{
    return(
        <div className="app">
            <Header></Header>
            <Body/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);
