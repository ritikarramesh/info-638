const db = require('../database')

exports.all = async (userId) => {
  const { rows } = await db.getPool().query("select * from applications where user_id = $1 order by id", [userId]);
  return db.camelize(rows);
}

exports.add = async (application) => {
  const { rows } = await db.getPool()
    .query("INSERT INTO applications(user_id, dog_id, status, submission_date, decision_date, name, phone, address, city, state, zip_code, housing_type, activity_level, reason, notes) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *",
      [application.userId, application.dogId, application.status, application.submissionDate, application.decisionDate, application.name, application.phone, application.address, application.city, application.state, application.zipCode, application.housingType, application.activityLevel, application.reason, application.notes]);
  let newApplication = db.camelize(rows)[0]
  return newApplication
}

exports.get = async (id) => {
  const { rows } = await db.getPool().query("select * from applications where id = $1", [id]);
  return db.camelize(rows)[0]
}