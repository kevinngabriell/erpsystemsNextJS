export interface Customer {
    customer_id: string;
    customer_name: string;
    customer_address: string;
    customer_phone: string;
    customer_pic: string;
    customer_contact_pic: string;
    customer_top: string;
}

export async function getAllCustomer(): Promise<Customer[]>{
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const token = localStorage.getItem("token");

    try{
        const res = await fetch(`${baseUrl}` + `settings/customer/customer.php`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })

        const json = await res.json();

        if (json.status_code !== 200) {
        throw new Error(json.status_message || 'Failed to fetch customer');
        }

        return json.data;

    } catch (error) {
        console.error('Fetching data error:', error);
        throw error;
    }
}

export async function getDetailCustomer(customer_id: string) : Promise<Customer>{
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const token = localStorage.getItem("token");

    try{
        const res = await fetch(`${baseUrl}` + `settings/customer/customer-details.php?customer_id=` + `${customer_id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })

        const json = await res.json();

        if (json.status_code !== 200) {
        throw new Error(json.status_message || 'Failed to fetch customer');
        }

        return json.data[0];

    } catch (error) {
        console.error('Fetching data error:', error);
        throw error;
    }
}