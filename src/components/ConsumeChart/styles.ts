import styled from 'styled-components/native';

export { Container } from '../../pages/styles';

export const GraphContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
  flex-direction: row;
`;

export const GraphItemContent = styled.View`
  align-items: center;
  margin: 0 10px;
`;
export const GraphItemTitle = styled.Text`
  color: #777;
  font-family: Nunito-Bold;
  margin-bottom: 5px;
`;

interface IGraphItemBar {
  width: number;
  height: number;
  borderRadius: number;
}
export const GraphItemBar = styled.View`
  width: ${(props: IGraphItemBar) => props.width}px;
  height: ${(props: IGraphItemBar) => props.height}px;
  border-radius: ${(props: IGraphItemBar) => props.borderRadius}px;
  background-color: ${(props: IGraphItemBar) => (props.height === 10 ? ' #ccc' : '#0ef500')};
`;

export const GraphItemDay = styled.Text`
  color: #777;
  font-family: Nunito-Regular;
  margin-top: 20px;
  padding: 10px;
  transform: rotate(-90deg);
`;

export const GraphPeriodPicker = styled.Pressable`
  background-color: #0ef500;
  align-self: stretch;
  margin: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  padding: 10px 20px;
`;

export const GraphPeriodPickerText = styled.Text`
  color: #333;
  font-family: Nunito-Bold;
  font-size: 25px;
`;

export const BottomSheetWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
