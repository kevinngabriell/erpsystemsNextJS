export interface Currency {
    currency_id: string;
    currency_name: string;
}

export async function getAllCurrency(): Promise<Currency[]>{
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const token = localStorage.getItem("token");

    try{
        const res = await fetch(`${baseUrl}` + `settings/currency/currency.php`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })

        const json = await res.json();

        if (json.status_code !== 200) {
        throw new Error(json.status_message || 'Failed to fetch currency');
        }

        return json.data;
    } catch (error){
        console.error('Fetching data error:', error);
        throw error;
    }
}