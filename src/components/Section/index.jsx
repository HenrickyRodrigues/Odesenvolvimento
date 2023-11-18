import { Section as WrapperSection, Title, Info, List, SearchButton } from "./styles"

function Section({children}) {

  return (

    <WrapperSection>
      {children}
    </WrapperSection>

  )
}

export default Section;
