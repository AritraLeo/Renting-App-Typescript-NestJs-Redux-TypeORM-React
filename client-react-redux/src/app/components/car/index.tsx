import { faEllipsisH, faFillDrip, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Button } from "../buttons";


interface ICarProps extends ICar {

}

const CarContainer = styled.div`
    width: 16.5em;
    min-height: 22.2em;
    max-height: 25.2em;
    box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
    ${tw`
        flex flex-col items-center pb-4 p-3 bg-white rounded-md m-1 sm:m-3 md:m-6
    `};
`;


const CarThumbnail = styled.div`
    width: 100%;
    height: auto;

    img{
        width: 100%;
        height: 100%;
    }

`;

const CarName = styled.h3`
    ${tw`
        text-base font-bold text-black mt-1 mb-1
    `};
`;

const PricesContainer = styled.div`
    ${tw`
        w-full flex justify-start mt-3
    `};
`;

const SmallText = styled.p`
    color: inherit;
    ${tw`
        text-xs font-thin inline-flex
    `};
`;

const DailyPrice = styled.h5`
    ${tw`
        text-red-500 font-bold text-sm mr-3
    `};
`;


const MonthlyPrice = styled.h5`
    ${tw`
        text-gray-500 font-bold text-sm
    `};
`;

const SmallIcon = styled.span`
    ${tw`
        text-gray-500 mr-1 text-sm
    `};
`;

const CarDetailsContainer = styled.div`
    ${tw`
        flex w-full justify-between
    `};
`;


const CarDetail = styled.span`
    ${tw`
        flex items-center
    `};
`;

const CarInfo = styled.h6`
    ${tw`
        text-gray-400 text-xs
    `};
`;

const Seperator = styled.div`
    min-width: 100%;
    min-height: 1px;
    ${tw`
        flex bg-gray-300 mt-2 mb-2
    `};
`;

const RentButton = styled(Button)`
    ${tw`
        min-w-full mt-5
    `};
`;


export const Car = (props: ICarProps) => {

    const {
thumbnailSrc,
name,
gearType,
dailyPrice,
monthlyPrice,
gas,
    mileage } = props;
    
    return <CarContainer>
        <CarThumbnail>
            <img src={thumbnailSrc} alt="" />
        </CarThumbnail>
        <CarName>
            {name }
        </CarName>
        <PricesContainer>
            <DailyPrice>
                ${dailyPrice}
                <SmallText>/day</SmallText>
            </DailyPrice>
            <MonthlyPrice>
                ${monthlyPrice}
                <SmallText>/month</SmallText>
            </MonthlyPrice>
        </PricesContainer>
        <Seperator />
        <CarDetailsContainer>
            {/* 1 */}
            <CarDetail>
                <SmallIcon>
                    <FontAwesomeIcon icon={faTachometerAlt} />
                </SmallIcon>
                <CarInfo>
                    {mileage}
                </CarInfo>
            </CarDetail>
            {/* 2 */}
            <CarDetail>
                <SmallIcon>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </SmallIcon>
                <CarInfo>
                    {gearType}
                </CarInfo>
            </CarDetail>
            {/* 3 */}
            <CarDetail>
                <SmallIcon>
                    <FontAwesomeIcon icon={faFillDrip} />
                </SmallIcon>
                <CarInfo>
                    {gas}
                </CarInfo>
            </CarDetail>
        </CarDetailsContainer>
        <RentButton text="Rent Now"/>
    </CarContainer>

}

