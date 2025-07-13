export interface Users {
    username: string;
    first_name: string;
    last_name: string;
    permission_access: string;
    permission_id: string;
    company_name: string;
    company_id: string;
    package_name: string;
}

export async function getAllUsers(): Promise<Users[]>{
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const token = localStorage.getItem("token");

    try{
        const res = await fetch(`${baseUrl}` + `account/user.php`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })

        const json = await res.json();

        if (json.status_code !== 200) {
        throw new Error(json.status_message || 'Failed to fetch users');
        }

        return json.data;
    } catch (error){
        console.error('Fetching data error:', error);
        throw error;
    }
}

export async function getUser(username: string): Promise<Users>{
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const token = localStorage.getItem("token");

    try{
        const res = await fetch(`${baseUrl}` + `account/user-details.php?username=` + `${username}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })

        const json = await res.json();

        if (json.status_code !== 200) {
        throw new Error(json.status_message || 'Failed to fetch users');
        }

        return json.data[0];
    } catch (error){
        console.error('Fetching data error:', error);
        throw error;
    }
}