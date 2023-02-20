const TransactionArrowIcon = (props: any) => (
    <svg style={props.direction === "left" ? {transform: "rotate(180deg)"} : props.direction === "down" ? {transform: "rotate(90deg)"} : {}} width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 1L19 5M19 5L15 9M19 5L1 5" stroke="#00FFA3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>



)

export default TransactionArrowIcon
