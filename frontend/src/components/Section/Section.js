import React from 'react';
import { SectionContainer, 
    SectionContent,
    H1,
    Desc, 
    BtnRoute,
    SectionBtn,
    ForwardIcon 
} from './sectionElements';
/* import {} from 'react-icons'; */

const Section = () => {
    return (
        <>
            <SectionContainer>
                <SectionContent>
                    <H1>Realiza intercambios de libros de forma segura </H1>
                    <Desc>Los intercambios de libros con otras personas son de forma segura y se encuentran
bajo control de nuestro equipo de desarrollo. Comienza a buscar tu libro deseado y
ayuda al planeta a reducir la cantidad de elaboración masiva de estos.</Desc>
                    <BtnRoute>
                        <SectionBtn to="/register"> Comenzar <ForwardIcon/> </SectionBtn>
                    </BtnRoute>
                </SectionContent>
            </SectionContainer>
        </>
    )
}

export default Section
