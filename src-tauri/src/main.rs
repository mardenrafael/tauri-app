// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri_plugin_sql::{Migration, MigrationKind};

fn main() {
  let migrations = vec![
    Migration {
      version: 1,
      kind: MigrationKind::Up,
      description: "Create table tasks",
      sql: "CREATE TABLE tasks (id INTEGER PRIMARY KEY, task_name TEXT, task_description TEXT, 
    task_date_start TEXT, task_date_end TEXT);"
    },
    Migration {
      version: 2,
      kind: MigrationKind::Up,
      description: "Create table tasks",
      sql: "
      ALTER TABLE tasks DROP COLUMN task_date_start;
      ALTER TABLE tasks DROP COLUMN task_date_end;
      "
    },
    Migration {
      version: 3,
      kind: MigrationKind::Up,
      description: "Create table tasks",
      sql: "
      ALTER TABLE tasks ADD COLUMN task_date_start BLOB;
      ALTER TABLE tasks ADD COLUMN task_date_end BLOB;
      "
    }
  ];

  
  tauri::Builder::default()
    .plugin(tauri_plugin_sql::Builder::default()
              .add_migrations("sqlite:test.db", migrations)
              .build())
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
