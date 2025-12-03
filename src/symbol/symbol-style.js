import styled from "styled-components";

export const SymbolStyle = styled.div`
  .main-container {
    display: flex;
    flex-direction: column; /* or row if needed */
    align-items: center;
    justify-content: center;
    min-height: 100vh; /* centers vertically relative to the viewport */
    width: 100%;
     font-family: "Anta", sans-serif;
  }

  .container1 {
  margin-top:100px;
    text-align: center;
    width:1350px;
    height:900px;
  }
    
  .container1-header1 {
    font-size: 90px;
    color: red;
  }

  .container1-header2 {
    font-size: 35px;
    margin-bottom:0;
    font-weight:superbold;
  }
.container1-italic{
font-size:40px;
color:red;
font-weight:bold;

}

 .sub-container1 p{
  font-size:25px;
  line-height:1.5;
  margin-top:80px;
  color:grey;
 
}
 
.button-group-container1 .button1
{
padding:15px 30px;
font-size:25px;
border:none;
font-weight:bold;
border-radius:5px;
margin-right:25px;
}
.button-group-container1 .button2{
padding:15px 30px;
font-size:25px;
border:none;
background-color:red;
color:white;
font-weight:bold;
border-radius:5px;
}

  width: 100%;
  background: #fff;
  padding: 50px 0;
  font-family: "Poppins", sans-serif;

  .symbol {
    width: 80%;
    margin: auto;
    text-align: center;
  }

  .heading {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #000;
  }

  .para1 {
    width: 70%;
    margin: auto;
    font-size: 18px;
    line-height: 1.7;
    color: #5f6f82;
  }

  .vission-mission {
    width: 90%;
    margin: 60px auto 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  /* Vision & Mission containers */
  .vission,
  .mission {
    width: 45%;
    text-align: left;
  }
  .vission-1 h1{
  color:#00a9d6;
  }
  .mission-1 h1{
  color:#f4a835;
  }
  /* Title container with color bar */
  .vission-1,
  .mission-1 {
    color: #000;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
 
.vission-1{
    color: rgb(243, 176, 79);
    border-left: 4px solid rgb(243, 176, 79);
    padding-left: 0.5rem;
    }

    .mission-1{
    color: rgb(0, 189, 235);
    border-left: 4px solid rgb(0, 189, 235);
    padding-left: 0.5rem;
    }

  .para2,
  .para3 {
    font-size: 17px;
    color: #5f6f82;
    line-height: 1.7;
  }

  /* Vertical divider */
  .divider {
    width: 1px;
    background: #ccc;
    height: 150px;
    margin: auto 20px;
  }

  @media (max-width: 768px) {
    .vission-mission {
      flex-direction: column;
      gap: 40px;
    }

    .divider {
      display: none;
    }

    .vission,
    .mission {
      width: 100%;
    }

    .para1 {
      width: 90%;
    }
  }
     background: #ffffffff;            
  padding: 50px 0;             
  min-height: 100vh;           

  .pill-box {
    background: #ff2347;
    padding: 60px 80px;
    border-radius: 120px;
    max-width: 1300px;
    margin: 60px auto;
    color: white;
    text-align: center;
  }

  .pill-box h1 {
    font-size: 38px;
    font-weight: 800;
    margin-bottom: 15px;
  }

  .pill-box p {
    font-size: 20px;
    line-height: 1.5;
    max-width: 900px;
    margin: 0 auto;
  }

  @media (max-width: 900px) {
    .pill-box {
      padding: 30px 20px;
      border-radius: 60px;
      max-width: 95%;
    }

    .pill-box h1 {
      font-size: 24px;
    }

    .pill-box p {
      font-size: 15px;
    }
  }
`;