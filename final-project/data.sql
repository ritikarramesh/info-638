insert into shelters (name, address, city, state, zip_code, phone, email)
values 
  ('Happy Tails Shelter', '123 Main St', 'Springfield', 'IL', '62701', '555-1234', 'contact@happytails.org'),
  ('Safe Paws Shelter', '456 Oak Ave', 'Rivertown', 'NY', '10001', '555-5678', 'contact@safepaws.org');

insert into dogs (name, breed, age, gender, size, color, description, status, shelter_id)
values 
  ('Buddy', 'Labrador Retriever', 3, 'male', 'large', 'black', 'Friendly and energetic.', 'available', 1),
  ('Molly', 'Beagle', 5, 'female', 'medium', 'brown/white', 'Loves to cuddle.', 'available', 1),
  ('Rocky', 'German Shepherd', 4, 'male', 'large', 'tan/black', 'Highly intelligent and alert.', 'available', 2),
  ('Luna', 'Poodle', 2, 'female', 'small', 'white', 'Playful and hypoallergenic.', 'available', 2);
