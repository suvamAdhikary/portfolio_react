import Down from "../Assets/Images/down.png";

export default function DownArrow({nextPage}){

    return (<>
        <a href={nextPage}>
            <img src={Down} alt="down" />
        </a>
    </>)
}