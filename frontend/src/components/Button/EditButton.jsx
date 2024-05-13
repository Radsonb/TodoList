const EditButton = ({ onClick, isClose }) => {
    return(
        <button
            className={`
                ml-auto hover:bg-gray-400 p-[0.375rem] stroke-gray-300 fill-gray-300 rounded-[0.25rem] ${
                    isClose ? "hover:fill-danger hover:stroke-danger" : "hover:fill-success hover:stroke-success"
                }`}
                onClick={onClick}
        >{ isClose ? (
            <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M11 1L1 11M1 1L11 11"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
        ) : (
            <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M12.9206 2.24606L10.7539 0.0794305C10.7288 0.0542498 10.6989 0.0342738 10.666 0.0206445C10.6332 0.00701525 10.5979 0 10.5623 0C10.5267 0 10.4915 0.00701525 10.4586 0.0206445C10.4257 0.0342738 10.3959 0.0542498 10.3707 0.0794305L3.87082 6.57932C3.84568 6.60449 3.82574 6.63437 3.81215 6.66725C3.79856 6.70013 3.79158 6.73536 3.7916 6.77094V8.93757C3.7916 9.00939 3.82014 9.07828 3.87093 9.12907C3.92172 9.17986 3.99061 9.2084 4.06243 9.2084H6.22906C6.26464 9.20842 6.29987 9.20144 6.33275 9.18785C6.36563 9.17426 6.39551 9.15432 6.42068 9.12918L12.9206 2.62928C12.9458 2.60413 12.9657 2.57426 12.9794 2.54138C12.993 2.50851 13 2.47326 13 2.43767C13 2.40208 12.993 2.36684 12.9794 2.33396C12.9657 2.30108 12.9458 2.27121 12.9206 2.24606ZM6.11667 8.66674H4.33326V6.88333L8.93735 2.27924L10.7208 4.06265L6.11667 8.66674ZM11.104 3.67942L9.32058 1.89602L10.5623 0.654265L12.3457 2.43767L11.104 3.67942ZM12.4581 6.77094V12.1875C12.4581 12.403 12.3725 12.6097 12.2202 12.762C12.0678 12.9144 11.8611 13 11.6456 13H0.812487C0.597002 13 0.390343 12.9144 0.237972 12.762C0.0856009 12.6097 0 12.403 0 12.1875V1.35436C0 1.13887 0.0856009 0.932213 0.237972 0.779843C0.390343 0.627472 0.597002 0.541871 0.812487 0.541871H6.22906C6.30089 0.541871 6.36978 0.570405 6.42057 0.621195C6.47136 0.671985 6.49989 0.740871 6.49989 0.8127C6.49989 0.884528 6.47136 0.953414 6.42057 1.0042C6.36978 1.05499 6.30089 1.08353 6.22906 1.08353H0.812487C0.740658 1.08353 0.671772 1.11206 0.620982 1.16285C0.570192 1.21364 0.541658 1.28253 0.541658 1.35436V12.1875C0.541658 12.2593 0.570192 12.3282 0.620982 12.379C0.671772 12.4298 0.740658 12.4583 0.812487 12.4583H11.6456C11.7175 12.4583 11.7864 12.4298 11.8371 12.379C11.8879 12.3282 11.9165 12.2593 11.9165 12.1875V6.77094C11.9165 6.69911 11.945 6.63022 11.9958 6.57943C12.0466 6.52864 12.1155 6.50011 12.1873 6.50011C12.2591 6.50011 12.328 6.52864 12.3788 6.57943C12.4296 6.63022 12.4581 6.69911 12.4581 6.77094Z" />
        </svg>
        ) }</button>
    );
}

export default EditButton;