import React from "react";
import styled  from 'styled-components';
import  tw  from 'twin.macro';
import { BookCard } from "../../components/bookCard";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { AboutUs } from "./aboutUs";
import { BookingSteps } from "./bookingSteps";
import { TopCars } from "./topCars";
import { TopSection } from "./topSection";


const PagedContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export const HomePage = () => {
    return <PagedContainer>
        <Navbar />
        <TopSection />
        <Marginer direction="vertical" margin='4em' />
        <BookCard />
        <Marginer direction="vertical" margin='8em' />
        <BookingSteps />
        <Marginer direction="vertical" margin='7em' />
        <AboutUs />
        <Marginer direction="vertical" margin='7em' />
        <TopCars />
        <Footer/>
    </PagedContainer>
}
