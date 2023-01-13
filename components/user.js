


export default function User(firstName,lastName,email,activity,group) {
    return (
        <>
            <thead>
                <tr>
                    <th>{firstName}</th>
                    <th>{lastName}</th>
                    <th>{email}</th>
                    <th>(activity)</th>
                    <th>{group}</th>
                </tr>
            </thead>
        </>
        )
}