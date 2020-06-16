import axios from 'axios'

const getMessage = () => axios.get('https://jsonplaceholder.typicode.com/todos/1').then(({ data }) => data)

export default getMessage
