import React from 'react'

type Props = {}
let day: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let date = new Date().getDay();

function Header({ }: Props) {
    return (
        <div className='Heading'>
            <h1 >ToDo List</h1>
            <h2 className='self-center text-white'>Whoo, it`s {day[date]}🌝☕</h2>
            <hr />
        </div>
    )
}

export default Header