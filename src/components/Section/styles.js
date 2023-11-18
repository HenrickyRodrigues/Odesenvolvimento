import styled from "styled-components";

export const Section = styled.section`
  background-color:whitesmoke;
  width: 52%;
  height: 63%;
  color: black;
  padding: 27px;
  flex-direction: column;
  border-radius: 40px;
  text-align: center;
`
export const Title = styled.h2`
  width: 100%;
  font-size: 52px;
  align-self: flex-start;
  border-bottom: 1px solid #ccc;
`
export const Info = styled.div`
  font-size: 26px;
  margin-top: 20px;
`

export const List = styled.ul`
  list-style: none;

  li {
    margin: 8px 0;
  }
`

export const SearchButton = styled.button`
  padding: 8px;
  margin-top: 16px;
  border: 1px solid #1f1f1f;
  border-radius: 5px;
  font-size: 18px;
  background-color: #ed195c;
  color: #fff;
  cursor: pointer;

  &:hover{
    background-color: #8d0f37;
  }
`

