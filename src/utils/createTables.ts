import db from './openDatabase'

const createTables = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS pomodoros(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          date TEXT,
          count INTEGER,
      )
      ;`,
      [],
      () => {
        console.log('Table pomodoros created')
      },
      (error) => {
        console.log('Error creating table pomodoros', error)
        return false
      }
    )

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS settings(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          pomodoro_seconds INTEGER,
          break_seconds INTEGER,
          long_break_seconds INTEGER,
          long_break_interval INTEGER,
          show_new_tab_notification_when_pomodoro BOOLEAN,
          show_new_tab_notification_when_break BOOLEAN,
          show_desktop_notification_when_pomodoro BOOLEAN,
          show_desktop_notification_when_break BOOLEAN,
      )
      ;`,
      [],
      () => {
        console.log('Table settings created')
      },
      (error) => {
        console.log('Error creating table settings', error)
        return false
      }
    )
  })
}

export default createTables
