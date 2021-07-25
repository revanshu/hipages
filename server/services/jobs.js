const db = require('../services/db');

async function getNewJobs(){
    const query = `SELECT jobs.contact_name,
                        jobs.created_at,
                        jobs.id,
                        jobs.description,
                        jobs.price,
                        suburbs.name as suburb_name,
                        categories.name as category_name
                    FROM jobs
                    INNER JOIN suburbs ON suburbs.id = jobs.suburb_id
                    INNER JOIN categories ON categories.id = jobs.category_id
                    WHERE jobs.status = 'new'`
    const data = await db.query(query);
    const meta = {page: 1};

    return {
        data,
        meta
    }
}

async function getAcceptedJobs(){
    const query = `SELECT jobs.contact_name,
                        jobs.created_at,
                        jobs.id,
                        jobs.contact_email,
                        jobs.contact_phone,
                        jobs.description,
                        jobs.price,
                        suburbs.name as suburb_name,
                        categories.name as category_name
                    FROM jobs
                    INNER JOIN suburbs ON suburbs.id = jobs.suburb_id
                    INNER JOIN categories ON categories.id = jobs.category_id
                    WHERE jobs.status = 'accepted'`
    const data = await db.query(query);
    const meta = {page: 1};

    return {
        data,
        meta
    }
}

async function updateJobStatus(id, status){
    const query = `UPDATE jobs SET status = '${status}' WHERE id = ${id}`
    console.log(query);
    const data = await db.query(query);
    let result;
    if(data.affectedRows){
        result = await getNewJobs()
    }
    const meta = {page: 1};

    return {
        result,
        meta
    }
}

module.exports = {
    getNewJobs,
    getAcceptedJobs,
    updateJobStatus
}
