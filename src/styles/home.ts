import styled from "styled-components";
import css from "styled-jsx/css";

export const HomeContainer = styled.div`
    background-color: ${props => props.theme.background};
    padding: 2.1rem 10rem 2.1rem 10rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: start;
`

interface CategoriesProp {
    isactive?: boolean
}

export const HomeContainerHeader = styled.div`
 display: flex;
 align-items: start;
justify-content: space-between;
width: 100%;
`

export const CategoryItem = styled.li<CategoriesProp>`
    list-style-type: none;
    font-family: 'Saira', sans-serif;
    cursor: pointer;
    font-size: 1rem;
    border-bottom: ${props => props.isactive ? `solid ${props.theme["orange-low"]}` : `none`};
`

export const Categories = styled.ul`
    display: flex;
    gap: 2.4rem;
`



export const Filters = styled.ul`
display: flex;
flex-direction: column;
gap: 1.25rem;
align-items: end;
justify-content: center;

label{
    background-color: transparent;
    border: none;
    font-family: 'Saira', sans-serif;
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    cursor: pointer;
}

div{
    position: relative;
}

input {
    display: none;
}

div[id='sortMenu']{
    opacity: 0;
    background-color: transparent;
    position: absolute;
    z-index: 300;
    width: 100%;
    background-color: ${props => props.theme["background"]};

}

input:checked+div[id='sortMenu']{
    opacity: 1;
    transition: opacity 500ms;

    ul{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-family: 'Saira', sans-serif;
        font-size: 0.85rem;
        background-color: transparent;
        list-style-type: none;
        gap: 0.5rem;
        border-radius: 8px;
        padding: 1rem;
        li{
            cursor: pointer;
            width: 100%;
            text-transform: none;
            background-color: transparent;
            &:hover{
                background-color: ${props => props.theme["gray-150"]};

            }
            border-bottom: ${props => true ? `solid ${props.theme["orange-low"]}` : `none`};
        }
    }
}

ul{
    display: flex;
    gap: 2px;

   :nth-child(6){
    margin-left: 2px;
   }
}

 & >ul li{
    list-style-type: none;
    font-family: 'Saira', sans-serif;
    font-size: 1rem;
    line-height: 150%;
    text-transform: uppercase;
    text-align: center;
    padding: 0.25rem;
    border-radius: 0.5rem;
    background-color: '#E9E9F0';
    border: 1px solid transparent;
    cursor: pointer;
    


    span{
        display: block;
        width: 1.25rem;
        height: 1.25rem;
    }

    &:hover{
        border: 1px solid ${props => props.theme["orange-low"]};
        background-color: ${props => props.theme.white};
    }

    svg{
        position: relative;
        vertical-align: middle;
    }
}
`


export const ProductsContainer = styled.div`
    margin-top: 2.25rem;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(4, 1fr);
    gap: 2rem;
`

export const Productcard = styled.div`
    width: 256px;
    background-color: ${props => props.theme.white};
    border-radius: 4px;
    cursor: pointer;
    &>div{
        padding: 0.5rem 0.75rem;
        h3{
            font-family: 'Saira', sans-serif;
            font-size: 1rem;
            color: ${props => props.theme["gray-400"]}
        }

        div{
            width: 228px;
            margin: 0 auto;
            height: 1px;
            background-color: ${props => props.theme["gray-150"]};;;
            /* border: 1px solid ${props => props.theme["gray-200"]};; */
        }

        span {
            color: ${props => props.theme["gray-900"]};
            font-family: 'Saira', sans-serif;
            font-weight: 600;

        }
    }

`

