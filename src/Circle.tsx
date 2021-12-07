import { useState } from "react";
import styled from "styled-components";
// interface는 object의 shape을 설명해줌  
// interface를 활용해 styled-components에도 타입을 줌
interface ContainerProps {
    bgColor: string,
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor}
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}
/* borderColor에서 ? 를 붙여 준 이유는 optional을 해주기 위함 
   borderColor: string || undefined 와 똑같음
*/

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
    /* useState의 초기값을 비워두면 undefined가 뜨지만
       초기값을 false를 주면 boolean , 12를 주면 number로 typescirpt가 자동적으로 인식함
       보통은 state의 타입이 거의 변하지 않기 초기값만 맞춰서 설정해주면 타입을 굳이 따로 설정해줄 필요는 없지만,
       만약 string과 number 두개 다 사용하는 state라면 "useState<string | number>"처럼 사용해주면 된다.
     */
    const [value, setValue] = useState<string>("");


    return (
        /* borderColor 내부에 '??'는 javascirpt 의 '||'(또는) 이랑 똑같은 역할을 함 */
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
            {text}
        </Container>
    )
}

export default Circle;