import styled from "styled-components";

export const OurPromiseStyle = styled.div`
    .title {
        font-size: 50px;
        margin-top: 30px;
        margin-left: 80px;
    }

    .div1, .div2, .div3, .div4, .div5, .div6 {
        padding-top: 30px;
        width: 400px;
        text-align: center;
    }

    .whole {
        width: 100%;
        height: auto;
        background-color: #f5f5f5;
        margin-top: 50px;
        padding-bottom: 50px;
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .sub-class1, .sub-class2 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 80%;
        margin-top: 50px;
        margin-bottom: 50px;
        gap: 40px;
        font-size: 20px;
        color: black;
    }

    .sub-class1:hover, .sub-class2:hover {
        color: #150c0cff;
        cursor: pointer;
    }

    .div1, .div4 {
        border-top: solid 10px #93154eff;
    }

    .div2, .div5 {
        border-top: solid 10px #73278cff;
    }

    .div3, .div6 {
        border-top: solid 10px #e92fb1ff;
    }
`;
