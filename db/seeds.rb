# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user = User.create(username: "Rosemary", password: "111")
userTwo = User.create(username: "Mary", password: "222")
userThree = User.create(username: "John", password: "333")
userFour = User.create(username: "Jane", password: "444")
userFive = User.create(username: "Joe", password: "555")



personnel = Personnel.create(first_name: "Rosemary", last_name: "Njeri", sex: "Female", age: "35", hourly_billing_rate: "300", primary_phone_number: "0200000001", primary_email_address: "rosemary@gmail.com")
personnelTwo = Personnel.create(first_name: "Mary", last_name: "J", sex: "Female", age: "36", hourly_billing_rate: "400", primary_phone_number: "0200000012", primary_email_address: "mary@gmail.com")
personnelThree = Personnel.create(first_name: "John", last_name: "Jay", sex: "Male", age: "30", hourly_billing_rate: "500", primary_phone_number: "02000000112", primary_email_address: "john@gmail.com")
personnelFour = Personnel.create(first_name: "Jane", last_name: "Wanja", sex: "Female", age: "42", hourly_billing_rate: "700", primary_phone_number: "0200000312", primary_email_address: "jane@gmail.com")
personnelFive = Personnel.create(first_name: "Joe", last_name: "Chang", sex: "Male", age: "38", hourly_billing_rate: "600", primary_phone_number: "0200000412", primary_email_address: "joe@gmail.com")

profile = Profile.create(image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fnanny&psig=AOvVaw2Hp3V0Fo0EZGYzEMzH63ar&ust=1665541312615000&source=images&cd=vfe&ved=2ahUKEwii5dKDj9f6AhWlTeUKHZ3CCmwQjRx6BAgAEAs",
    biography: "Born in Nairobi, Kenya. I love what I do. I am a Kenyan.", years_experience: 5, personnel_id: personnel.id, rating: 3)
profileTwo = Profile.create(image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fnanny&psig=AOvVaw2Hp3V0Fo0EZGYzEMzH63ar&ust=1665541312615000&source=images&cd=vfe&ved=2ahUKEwii5dKDj9f6AhWlTeUKHZ3CCmwQjRx6BAgAEAs",
    biography: "Born in Kakamega, Kenya. I love what I do. I am a Kenyan.", years_experience: 5, personnel_id: personnelTwo.id, rating: 4)
profileThree = Profile.create(image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fnanny&psig=AOvVaw2Hp3V0Fo0EZGYzEMzH63ar&ust=1665541312615000&source=images&cd=vfe&ved=2ahUKEwii5dKDj9f6AhWlTeUKHZ3CCmwQjRx6BAgAEAs",
    biography: "Born in Nanyuki, Kenya. I love what I do. I am a Kenyan.", years_experience: 5, personnel_id: personnelThree.id, rating: 5)
profileFour = Profile.create(image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fnanny&psig=AOvVaw2Hp3V0Fo0EZGYzEMzH63ar&ust=1665541312615000&source=images&cd=vfe&ved=2ahUKEwii5dKDj9f6AhWlTeUKHZ3CCmwQjRx6BAgAEAs",
    biography: "Born in Mombasa, Kenya. I love what I do. I am a Kenyan.", years_experience: 5, personnel_id: personnelFour.id, rating: 1)
profileFive = Profile.create(image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fnanny&psig=AOvVaw2Hp3V0Fo0EZGYzEMzH63ar&ust=1665541312615000&source=images&cd=vfe&ved=2ahUKEwii5dKDj9f6AhWlTeUKHZ3CCmwQjRx6BAgAEAs",
    biography: "Born in Kayole, Kenya. I love what I do. I am a Kenyan.", years_experience: 5, personnel_id: personnelFive.id, rating: 2)

customer = Customer.create(first_name: "Mercy", last_name: "Njoki", phone_number: "0123000002", email_address: "mercy@gmail.com",user_id: user.id)
customerTwo = Customer.create(first_name: "Alvin", last_name: "Huge", phone_number: "0123000012", email_address: "alvin@gmail.com", user_id: userTwo.id)
customerThree = Customer.create(first_name: "Val", last_name: "Kim", phone_number: "0123000022", email_address: "val@gmail.com", user_id: userThree.id)
customerFour = Customer.create(first_name: "Naomi", last_name: "Yego", phone_number: "0123000452", email_address: "naomi@gmail.com", user_id: userFour.id)
customerFive = Customer.create(first_name: "Scott", last_name: "Kihahu", phone_number: "0123000234", email_address: "scott@gmail.com", user_id: userFive.id)


booking = Booking.create(personnel_id: personnel.id, customer_id: customer.id, fulfilled: true)
bookingTwo = Booking.create(personnel_id: personnelTwo.id, customer_id: customerTwo.id, fulfilled: false)
bookingThree = Booking.create(personnel_id: personnelThree.id, customer_id: customerThree.id, fulfilled: true)
bookingFour = Booking.create(personnel_id: personnelFour.id, customer_id: customerFour.id, fulfilled: true)
bookingFive = Booking.create(personnel_id: personnelFive.id, customer_id: customerFive.id, fulfilled: true)


# puts seeding