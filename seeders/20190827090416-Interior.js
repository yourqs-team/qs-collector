'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Interiors', [{
      painting_interior: "Owner",
      ProjectId: 1
    }], {});

    await queryInterface.bulkInsert('Interior_trims', [{
      scotia_type: "Modern",
      skirting_type: "Modern",
      window_architrave: "Aluminium",
      door_architrave: "Metal",
      ProjectId: 1
    }], {});

    await queryInterface.bulkInsert('Interior_finishes', [{
      kitchen_floor_covering: "Vinyl",
      kitchen_wall_finish: "Paint",
      living_floor_covering: "Vinyl",
      living_wall_finish: "Paint",
      bedrooms_floor_covering: "Vinyl",
      bedrooms_wall_finish: "Paint",
      bathroom_floor_covering: "Vinyl",
      bathroom_wall_finish: "Paint",
      ensuite_floor_covering: "Vinyl",
      ensuite_wall_finish: "Paint",
      laundry_floor_covering: "Vinyl",
      laundry_wall_finish: "Paint",
      other_floor_covering: "Vinyl",
      other_wall_finish: "Paint",
      ProjectId: 1
    }], {});

    await queryInterface.bulkInsert('Window_and_doors', [{
      interior_door_type: "Pine Panelled",
      door_hardware: "Basic",
      ProjectId: 1
    }], {});

    await queryInterface.bulkInsert('Joinery_allowances', [{
      kitchen: 1000,
      laundry: 1200,
      wardrobe_master_bed: 780,
      wardrobes_other: "Small Side Wardrobe",
      wardrobe_other_amount: 200,
      other: "Living Room",
      other_amount: 1000,
      ProjectId: 1
    }], {});

    await queryInterface.bulkInsert('Plumbings', [{
      allowance_type: "Basic",
      HWC: "Relocated",
      new_connection: true,
      comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ProjectId: 1
    }], {});

    await queryInterface.bulkInsert('Electricals', [{
      allowance_type: "Standard",
      distribution_board: "Relocated",
      new_connection: true,
      comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ProjectId: 1
    }], {});

    await queryInterface.bulkInsert('Drainages', [{
      new_connections: true,
      comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ProjectId: 1
    }], {});

    await queryInterface.bulkInsert('Others', [{
      demolition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      renovation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ProjectId: 1
    }], {});
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Interiors', null, {});
    await queryInterface.bulkDelete('Interior_trims', null, {});
    await queryInterface.bulkDelete('Interior_finishes', null, {});
    await queryInterface.bulkDelete('Window_and_doors', null, {});
    await queryInterface.bulkDelete('Joinery_allowances', null, {});
    await queryInterface.bulkDelete('Plumbings', null, {});
    await queryInterface.bulkDelete('Electricals', null, {});
    await queryInterface.bulkDelete('Drainages', null, {});
    await queryInterface.bulkDelete('Others', null, {});
  }
};
