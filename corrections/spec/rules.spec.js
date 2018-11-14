const { setup, teardown } = require("./helpers");

//firebase serve --only firestore
//./node_modules/.bin/jest
const mockData = {
  "users/jeffd23": {
    roles: {
      admin: true
    }
  },
  "projects/testId": {
    members: ["bob"]
  }
};

describe("Project rules", () => {
  let db;
  let projectsRef;

  afterAll(async () => {
    await teardown();
  });

  test("deny an anonymous user", async () => {
    const db = await setup(null, mockData);

    // Allow rules in place for this collection
    projRef = db.doc("stats/testId");
    await expect(projRef.get()).toDeny();
  });
});
