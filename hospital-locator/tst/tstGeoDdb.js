
var tableManager = require("../lib/GeoDdb/config");
var geoClient = require("../lib/GeoDdb/GeoDdb");

async function startTest() {
    var config = tableManager("TST_INDIA_LOCATION_3")
    var client = new geoClient(config)
    if (!(await client.TableExists())) {
        console.log('Table doesnt exist creating new table')
        await client.CreateTable()
    } else {
        console.log('Table already exist')
    }
    //delhi
    lat = 28.704060
    long = 77.102493
    //Insert into TstTableName defined by config
    insertReq = {
        "lat": lat,
        "long": long,
        "name_english": "tst_hospital_ZZZ",
        "city" : "delhi",
        "zip" : "456001",
    }
    await client.InsertIntoTable(insertReq)


      //List all tables
      await client.ListTables()

      updateReq = {
          "lat": lat,
          "long": long,
          "name_english" : "tst_hospital_after_update",
          "city" : "delhi_after_update",
          "zip" : "999_after_update"
      }
      await client.UpdateTable(updateReq)

       //List all tables
      await client.ListTables()
      await client.QueryTable()
      queryReq = {
          "lat": lat,
          "long": long,
          "radius": 100000 //ie 100kms,
      }
      console.log("QueryWithinRadius should not be empty")
      await client.QueryWithinRadius(queryReq) //Should result success
  
  
      queryReq = {
          "lat": 27.1763098,
          "long": 77.9099723,
          "radius": 100000 //ie 100kms
      }
      console.log("QueryWithinRadius should be empty")
      await client.QueryWithinRadius(queryReq) //Should result nil
  
      queryReq = {
          "lat": 27.1763098,
          "long": 77.9099723,
          "radius": 500000 //ie 100kms
      }
      console.log("QueryWithinRadius should not be empty")
      await client.QueryWithinRadius(queryReq) //Should result success
      
      //Clean Table
      //await client.DeleteTableDONOTUNCOMMENT()

       //TODOS: implement batchWritePoints

}

async function tstGeoDdb() {
    console.log("Testing geodb apis")
    await startTest()
}

module.exports = {
    tstGeoDdb
}
