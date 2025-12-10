import usersMock from "../mocks/usersMock"

const getUsers = () => {
    const dataUsers = [...usersMock];
    return dataUsers;
}

export default getUsers;