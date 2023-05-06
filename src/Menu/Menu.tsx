import React from 'react';
import Navbar from '../Components/NavBar/Navbar';
import Appetizers from './Apetisers.json';
import BreakBrunch from './BreakBrunch.json';
import Burritos from './Burritos.json';
import CartThingy from './CartOrders.json';
import ChildPlates from './ChildPlate.json';
import Fijatas from './Fijatas.json';
import FilletSteak from './FilletSteak.json';
import Pollo from './Pollo.json';
import Salads from './Salads.json';
import Seafood from './SeaFood.json';
import Specials from './Specials.json';
import StreetTaco from './StreetTacos.json';
import Vegetarian from './Vegeterian.json';
import './thecssformenu.css';

const Menu = () => {
  return (
    <div style={{marginBottom: "50px"}}>
        <div style={{position: "fixed",marginTop: "-60px"}}>
            <Navbar/>
        </div>
        <div style={{marginTop: "60px", color: "#fff"}}
        className='themainmenutext'>
            <div style={{textAlign: "center"}}>
              <h1 style={{marginBottom: "20px",fontSize:"42px"}}>Our Entire Menu</h1>
              <h1 style={{marginBottom: "20px",fontSize:"38px"}}>Appetizers</h1>
              {
                Appetizers.map( appetizers => {
                  return(
                    <div style={{marginBottom: "40px"}}>
                      <h1 style={{color: "#E24C00"}}>{appetizers.name}</h1>
                      <h1 className="price" style={{
                        marginLeft: "10px",
                        color: "#4FBE00",
                      }}>{appetizers.price}</h1>
                      <div style={{
                        textAlign: "center"
                      }}>
                        <h4 style={{
                          fontSize: "30px",
                          color: "#9E9E9E",
                        }}>{appetizers.description}</h4>
                      </div>
                    </div>
                  )
                })
              }
              <h1 style={{marginBottom: "20px",fontSize:"38px"}}>Breakfast/Brunch</h1>
              {
                BreakBrunch.map( BreBru => {
                  return(
                    <div style={{marginBottom: "20px"}}>
                      <div style={{margin: "10px"}}>
                        <h1 style={{color: "#E24C00"}}>{BreBru.name}</h1>
                        <p className="price" style={{
                          marginLeft: "10px",
                          color: "#4FBE00",
                        }}>{BreBru.price}</p>
                        <div style={{
                          textAlign: "center"
                        }}>
                          <h4 style={{
                            fontSize: "30px",
                            color: "#9E9E9E",
                          }}>{BreBru.description}</h4>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              <h1 style={{marginBottom: "20px",fontSize:"38px"}}>Burritos</h1>
              {
                Burritos.map( burritos => {
                  return(
                    <div style={{marginBottom: "20px"}}>
                      <div style={{margin: "10px"}}>
                        <h1 style={{color: "#E24C00"}}>{burritos.name}</h1>
                        <p className="price" style={{
                          marginLeft: "10px",
                          color: "#4FBE00",
                        }}>{burritos.price}</p>
                        <div style={{
                          textAlign: "center"
                        }}>
                          <h4 style={{
                            fontSize: "30px",
                            color: "#9E9E9E",
                          }}>{burritos.description}</h4>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              <h1 style={{marginBottom: "20px",fontSize:"38px"}}>A la Cart Orders</h1>
              {
                CartThingy.map( coRders => {
                  return(
                    <div style={{marginBottom: "20px"}}>
                      <div style={{margin: "10px"}}>
                        <h1 style={{color: "#E24C00"}}>{coRders.name}</h1>
                        <p className="price" style={{
                          marginLeft: "10px",
                          color: "#4FBE00",
                        }}>{coRders.price}</p>
                      </div>
                    </div>
                  )
                })
              }
              <h1 style={{marginBottom: "20px",fontSize:"38px"}}>Child Plates</h1>
              {
                ChildPlates.map( Chp => {
                  return(
                    <div style={{marginBottom: "20px"}}>
                      <div style={{margin: "10px"}}>
                        <h1 style={{color: "#E24C00"}}>{Chp.name}</h1>
                        <p className="price" style={{
                          marginLeft: "10px",
                          color: "#4FBE00",
                        }}>{Chp.price}</p>
                      </div>
                    </div>
                  )
                })
              }
              <h1 style={{marginBottom: "20px",fontSize:"38px"}}>Fijatas</h1>
              {
                Fijatas.map( Fiji => {
                  return(
                    <div style={{marginBottom: "20px"}}>
                      <div style={{margin: "10px"}}>
                        <h1 style={{color: "#E24C00"}}>{Fiji.name}</h1>
                        <p className="price" style={{
                          marginLeft: "10px",
                          color: "#4FBE00",
                        }}>{Fiji.SingleOrderDescription}={Fiji.SingelOrderPrice}</p>
                        <p className="price" style={{
                          marginLeft: "10px",
                          color: "#4FBE00",
                        }}>{Fiji.DoubleOrderDescription}={Fiji.DoubleOrderPrice}</p>
                      </div>
                      <div style={{
                          textAlign: "center"
                        }}>
                          <h4 style={{
                            fontSize: "30px",
                            color: "#9E9E9E",
                          }}>{Fiji.description}</h4>
                        </div>
                    </div>
                  )
                })
              }
              <h1 style={{marginBottom: "20px",fontSize:"38px"}}>Filete/Steak</h1>
              {
                FilletSteak.map( flsteak => {
                  return(
                    <div style={{marginBottom: "20px"}}>
                      <div style={{margin: "10px"}}>
                        <h1 style={{color: "#E24C00"}}>{flsteak.name}</h1>
                        <p className="price" style={{
                          marginLeft: "10px",
                          color: "#4FBE00",
                        }}>{flsteak.price}</p>
                        <div style={{
                          textAlign: "center"
                        }}>
                          <h4 style={{
                            fontSize: "30px",
                            color: "#9E9E9E",
                          }}>{flsteak.description}</h4>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              <h1 style={{marginBottom: "20px",fontSize:"38px"}}>Pollo</h1>
              {
                Pollo.map( pollo => {
                  return(
                    <div style={{marginBottom: "20px"}}>
                      <div style={{margin: "10px"}}>
                        <h1 style={{color: "#E24C00"}}>{pollo.name}</h1>
                        <p className="price" style={{
                          marginLeft: "10px",
                          color: "#4FBE00",
                        }}>{pollo.price}</p>
                        <div style={{
                          textAlign: "center"
                        }}>
                          <h4 style={{
                            fontSize: "30px",
                            color: "#9E9E9E",
                          }}>{pollo.description}</h4>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              <h1 style={{marginBottom: "20px",fontSize:"38px"}}>Salads</h1>
              {
                Salads.map( salads => {
                  return(
                    <div style={{marginBottom: "20px"}}>
                      <div style={{margin: "10px"}}>
                        <h1 style={{color: "#E24C00"}}>{salads.name}</h1>
                        <p className="price" style={{
                          marginLeft: "10px",
                          color: "#4FBE00",
                        }}>{salads.price}</p>
                        <div style={{
                          textAlign: "center"
                        }}>
                          <h4 style={{
                            fontSize: "30px",
                            color: "#9E9E9E",
                          }}>{salads.description}</h4>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              <h1 style={{marginBottom: "20px",fontSize:"38px"}}>Seafood</h1>
              {
                Seafood.map( seafood => {
                  return(
                    <div style={{marginBottom: "20px"}}>
                      <div style={{margin: "10px"}}>
                        <h1 style={{color: "#E24C00"}}>{seafood.name}</h1>
                        <p className="price" style={{
                          marginLeft: "10px",
                          color: "#4FBE00",
                        }}>{seafood.price}</p>
                        <div style={{
                          textAlign: "center"
                        }}>
                          <h4 style={{
                            fontSize: "30px",
                            color: "#9E9E9E",
                          }}>{seafood.description}</h4>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              <h1 style={{marginBottom: "20px",fontSize:"38px"}}>Specials</h1>
              {
                Specials.map( speicals => {
                  return(
                    <div style={{marginBottom: "20px"}}>
                      <div style={{margin: "10px"}}>
                        <h1 style={{color: "#E24C00"}}>{speicals.name}</h1>
                        <p className="price" style={{
                          marginLeft: "10px",
                          color: "#4FBE00",
                        }}>{speicals.price}</p>
                        <div style={{
                          textAlign: "center"
                        }}>
                          <h4 style={{
                            fontSize: "30px",
                            color: "#9E9E9E",
                          }}>{speicals.description}</h4>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              <h1 style={{marginBottom: "20px",fontSize:"38px"}}>Street Tacos</h1>
              {
                StreetTaco.map( strettaco => {
                  return(
                    <div style={{marginBottom: "20px"}}>
                      <div style={{margin: "10px"}}>
                        <h1 style={{color: "#E24C00"}}>{strettaco.name}</h1>
                        <p className="price" style={{
                          marginLeft: "10px",
                          color: "#4FBE00",
                        }}>{strettaco.price}</p>
                        <div style={{
                          textAlign: "center"
                        }}>
                          <h4 style={{
                            fontSize: "30px",
                            color: "#9E9E9E",
                          }}>{strettaco.description}</h4>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              <h1 style={{marginBottom: "20px",fontSize:"38px"}}>Vegetarian</h1>
              <h2 style={{marginBottom: "20px"}}>ALL ITEMS BELOW $12.50</h2>
              {
                Vegetarian.map( strettaco => {
                  return(
                    <div style={{marginBottom: "20px"}}>
                      <div style={{margin: "10px"}}>
                        <div style={{
                          textAlign: "center"
                        }}>
                          <h4 style={{
                            fontSize: "30px",
                            color: "#E24C00",
                          }}>{strettaco.description}</h4>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
        </div>
    </div>
  )
}

export default Menu