import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([{
        id: 1,
        menuName: 'food',
        image: 'https://i.pinimg.com/236x/14/fb/31/14fb31ea5ed085cc4b07616b2d187842.jpg'
    },
    {
        id: 2,
        menuName: 'vegetable',
        image: 'https://i.pinimg.com/236x/14/fb/31/14fb31ea5ed085cc4b07616b2d187842.jpg'
    },
    {
        id: 3,
        menuName: 'meal',
        image: 'https://i.pinimg.com/236x/14/fb/31/14fb31ea5ed085cc4b07616b2d187842.jpg'
    },
    {
        id: 4,
        menuName: 'juice',
        image: 'https://i.pinimg.com/236x/14/fb/31/14fb31ea5ed085cc4b07616b2d187842.jpg'
    },
    {
        id: 5,
        menuName: 'coffee',
        image: 'https://i.pinimg.com/236x/14/fb/31/14fb31ea5ed085cc4b07616b2d187842.jpg'
    }

])
}