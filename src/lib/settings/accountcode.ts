
export interface AccountCode {
    id: string;
    code: string;
    account_name: string;
    account_name_alias: string;
}

export async function getAllAccountCode(): Promise<AccountCode[]>{
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const token = localStorage.getItem("token");

    try{
        const res = await fetch(`${baseUrl}` + `settings/accountcode.php`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })

        const json = await res.json();

        if (json.status_code !== 200) {
        throw new Error(json.status_message || 'Failed to fetch account codes');
        }

        return json.data;

    } catch (error) {
        console.error('Fetching data error:', error);
        throw error;
    }
}