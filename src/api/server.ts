let token = 'fa590d19060a339cf653816d23cd2ba343b0356d38e58f3e';

export const server_calls = {
    get: async () => {
        const response = await fetch(`http://motorcycle-collection-flask.herokuapp.com/api/bikes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }   
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()

    },

    create: async(data: any = {}) => {
        const response = await fetch(`http://motorcycle-collection-flask.herokuapp.com/api/bikes`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
	},

    update: async (id:string, data:any = {}) => {
        const response = await fetch(`http://motorcycle-collection-flask.herokuapp.com/api/bikes${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },

    delete: async(id:string) => {
        const response = await fetch(`http://motorcycle-collection-flask.herokuapp.com/api/bikes${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}