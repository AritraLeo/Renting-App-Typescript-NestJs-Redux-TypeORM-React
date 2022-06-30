import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { SCREENS } from '../../components/responsive';
import JeepImg from '../../../assets/images/jeep.png';

const AboutUsContainer = styled.div`
    ${tw`
        w-full flex flex-wrap items-center 2xl:justify-center pt-4 pb-4 pr-7 pl-7 md:pl-0 md:pb-0 bg-white
    `};
`;

const CarContainer = styled.div`

    height: 15em;
    width: auto;
    margin-left: -30px;

    img{
        width: auto;
        height: 100%;
        margin-left: 2em;
    }

    @media (min-width: ${SCREENS.md}) {
        height: 28em;
    }

    @media (min-width: ${SCREENS.lg}) {
        height: 30em;
    }

    @media (min-width: ${SCREENS['2xl']}) {
        height: 35em;
        margin-left: 0;
    }
`;


const InfoContainer = styled.div`
    ${tw`
        md:w-1/2 flex flex-col md:ml-6 2xl:ml-16
    `};
`;


const Title = styled.h1`
    ${tw`
        text-black text-2xl md:text-5xl font-extrabold md:font-black md:leading-normal
    `};
`;

const InfoText = styled.p`
    ${tw`
        text-gray-500 text-sm md:text-base md:max-w-2xl mt-4 font-normal
    `};
`;


export const AboutUs = () => {
    return <AboutUsContainer>
        <CarContainer>
            <img src={JeepImg} alt="Jeep" />
        </CarContainer>
        <InfoContainer>
            <Title>
                Feel the best with Our rental services!
            </Title>
            <InfoText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aspernatur veniam voluptatem, culpa excepturi vero delectus necessitatibus. Maiores necessitatibus modi ab nesciunt, illum iste nihil facilis vel nobis expedita cumque deleniti. Placeat, aperiam atque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et quibusdam ad cupiditate iusto voluptas explicabo quod officia voluptates consectetur ratione! Eveniet, eos perferendis! Consequuntur voluptatem aut architecto esse ea porro?
            </InfoText>
        </InfoContainer>
    </AboutUsContainer>
}
