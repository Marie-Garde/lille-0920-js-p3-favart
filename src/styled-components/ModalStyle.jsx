import styled from 'styled-components';
import {MdClose} from 'react-icons/md'


export const Background = styled.div`
    width: 100%;
    height:100%;
    background: rgba(0,0,0,0.2);
    position: fixed;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const ModalWrapper = styled.div`
    width: 800px;
    height:500px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background:white;
    display:grid;
    grid-template-columns: 1fr 1fr;
    position:relative;
    z-index:10;
    border-radius:10px;
`

export const ModalImg = styled.img`
    width:100%;
    height:50%;
    border-radius:10px 0 0 10px;
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    line-height: 1.8;
    color: #141414;

    p {
        margin-bottom: 1rem
    }

    button {
        padding: 10px 24px;
        background: #141414;
        color: white;
        border: none;
    }
`

export const CloseModalButton = styled(MdClose)`
    cursors:pointer;
    position:absolute;
    top:20px;
    right:20px;
    height:32px;
    width:32px;
    padding:0;
    z-index:10;

`