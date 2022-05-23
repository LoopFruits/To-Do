# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Todo.destroy_all



puts "Seeding..."

User.create(username: "ted", password:"1234567", password_confirmation: "1234567",first_name:Faker::Fantasy::Tolkien.character, last_name: Faker::Fantasy::Tolkien.character)


5.times do 
    Todo.create(user_id: User.ids.sample, title: Faker::Books::CultureSeries.book, description: Faker::Fantasy::Tolkien.character)
end


puts "Seeding Complete"