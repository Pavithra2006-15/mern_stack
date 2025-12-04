export const ImpactComponentStyle = `

/* --------------------------- TITLE --------------------------- */

.title {
    font-size: 50px;
    font-weight: 700;
    text-align: center;
    font-family: Inter, sans-serif;
    color: black;
    margin-left:300px;
    margin-bottom: 30px;
   // margin-top: 50px;
}

.highlight {
    color: #f52424;
}

/* --------------------------- OUTER WRAPPER --------------------------- */

.h {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}

/* --------------------------- MAIN WRAPPER --------------------------- */

.Glance {
    display: flex;
    margin-left:260px;
    flex-direction: column;
    align-items: center;     /* CENTER FIX */
    justify-content: center; /* CENTER FIX */
    //width: 100%;
    gap: 40px;
}

/* --------------------------- ROWS --------------------------- */

.Glance1,
.Glance2 {
    display: flex;
    //justify-content: center;  /* CENTER FIX */
    align-items: center;
    gap: 40px;
    //flex-wrap: wrap;
    //width: 100%;
}

/* --------------------------- CARD BASE --------------------------- */

.Glance1-1,
.Glance1-2,
.Glance2-1,
.Glance2-2 {
    display: flex;
    width: 500px;
    padding: 25px;
    border-radius: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    background: white;
    gap: 150px;
}

/* --------------------------- TEXT --------------------------- */

.Glance1-1 p,
.Glance1-2 p,
.Glance2-1 p,
.Glance2-2 p {
    font-size: 18px;
    margin: 0;
    color: #444;
}

.Glance1-1 h5,
.Glance1-2 h5,
.Glance2-1 h5,
.Glance2-2 h5 {
    font-size: 32px;
    font-weight: 700;
    margin-top: 10px;
    color: #000;
     display: flex; 
}
     
.image1{
position:relative;
left:150px;
bottom:20px;
top:20px;

}
.image2{
position:relative;
left:100px;
bottom:20px;
top:20px;

}
.image3{
position:relative;
left:100px;
bottom:20px;
top:20px;

}
.image4{
position:relative;
left:60px;
bottom:20px;
top:20px;

}

.Glance1-1 {
    background: #ffdfe4;
}

.Glance1-2 {
    background: #e2f0fa;
}

.Glance2-1 {
    background: #deffec;
}

.Glance2-2 {
    background: #ffe6e7;
}

/* --------------------------- RESPONSIVE --------------------------- */

@media (max-width: 920px) {
    .title {
        font-size: 26px;
    }

    .Glance1-1,
    .Glance1-2,
    .Glance2-1,
    .Glance2-2 {
        width: 90%;
    }
}
`;