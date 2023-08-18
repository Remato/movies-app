import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'

export const Wrapper = styled.View``

export const MoviesList = styled.FlatList``

export const MovieView = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 16px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 16px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: 'Nunito';
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 0.5px;
  margin-vertical: 18px;
`

export const MenuIcon = styled(Icon).attrs((props) => ({
  color: props.theme.colors.secondary,
  size: 24,
}))``
