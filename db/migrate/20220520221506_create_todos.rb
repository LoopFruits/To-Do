class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title
      t.boolean :done

      t.timestamps
    end
  end
end
