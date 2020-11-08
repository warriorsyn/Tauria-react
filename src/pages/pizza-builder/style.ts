import styled from 'styled-components'

export const Container = styled.div`
    padding: 0 1rem;
`

export const Content = styled.div`
 
    margin-top: 1rem;
    padding: 10px;
    background: white;

    .card-main {
        background: white;


        .title {
            display: flex;
            flex-direction: column;
            padding: 5px;
            .main {
                font-size: 20px;
                font-weight: bold;
            }

            .sub {
                color: #80808080;
                font-weight: bold;
                font-size: 13px
            }
        }
    }
`

export const Button = styled.button`
    border: 0;
    padding: .5rem;
    cursor: pointer;
    color: white;
    background: #0075ff;

    &:hover {
        box-shadow: 1px 2px 3px rgba(0,0,0,.1)
    }
`;

