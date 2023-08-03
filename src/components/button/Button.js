import { ButtonEl } from "./Button.styled"

export const Button = ({ handleLoadMoreBtn }) => {
    return (
        <ButtonEl type="button" onClick={handleLoadMoreBtn}>Load more</ButtonEl>
    )
}