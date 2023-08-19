import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Feather'

type Props = {
  favorited: boolean
}

export const Wrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``

export const DetailsWrapper = styled.View`
  padding-horizontal: 16px;
`

export const CardsWrapper = styled.View`
  margin-top: 16px;
`

export const Header = styled.View`
  position: absolute;
  flex-direction: row;
  margin-top: 62px;
`

export const InnerHeaderWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 16px;
`

export const BackIconWrapper = styled.View`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.tertiary};
`

export const BackIcon = styled(Icon).attrs((props) => ({
  color: props.theme.colors.secondary,
  size: 16,
}))`
  padding: 4px;
`

export const FavoriteIconWrapper = styled.View<Props>`
  border-radius: 16px;
  background-color: ${({ theme, favorited }) =>
    favorited ? theme.colors.primary : theme.colors.secondary};
`

export const FavoriteIcon = styled(Icon).attrs((props) => ({
  color: props.theme.colors.neutral,
  size: 16,
}))<Props>`
  padding: 4px;
`

export const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`

export const Title = styled.Text`
  font-family: 'Nunito';
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  margin-top: 32px;
  color: ${({ theme }) => theme.colors.secondary};
`

export const Subtitle = styled.Text`
  font-weight: 700;
  line-height: 24px;
  font-style: normal;
  font-family: 'Nunito';
  text-transform: uppercase;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.primary};
`

export const OverView = styled.Text`
  font-family: 'Nunito';
  font-size: 16px;
  line-height: 24px;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.secondary};
`

export const Image = styled.Image`
  width: 100%;
  height: 526px;
`
