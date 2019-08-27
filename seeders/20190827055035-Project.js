'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Projects', [{
        project_name: 'My Dream House',
        project_code: "13124",
        project_address: "Far far away",
        updatedAt: new Date(),
        createdAt: new Date(),
        UserId: 1
      }], {});

      await queryInterface.bulkInsert('Manpowers', [{
        markup: 13.13,
        no_builder: 13,
        administration: 40,
        supervision: 10,
        project_management: 20,
        no_vehicles: 4,
        travel_distance: 3,
        travel_price: 100,
        ProjectId: 1
      }], {});

      await queryInterface.bulkInsert('Site_arrangements', [{
        site_access: "Good",
        space_for_material_storage: "Good",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        living_arrangement: "vacated",
        carpet_protection: true,
        allow_extra_site_specific_time: 12,
        ProjectId: 1
      }], {});

      await queryInterface.bulkInsert('Safety_requirements', [{
        site_sign: true,
        fall_in_protection: true,
        crossing_protection: true,
        security_fencing: "Partial",
        ProjectId: 1
      }], {});

      await queryInterface.bulkInsert('Allowance_and_insurances', [{
        estimated_project_duration: 14,
        risk_insurance: true,
        building_guarantee: "Basic",
        ProjectId: 1
      }], {});

      await queryInterface.bulkInsert('Temporary_services', [{
        temporary_power: true,
        temporary_water: true,
        site_shed: "Small",
        ProjectId: 1
      }], {});

      await queryInterface.bulkInsert('Proffesional_service_allowances', [{
        plans: 1234,
        engineer: 1234,
        council_fees: 1235,
        geotechnical: 4123,
        surveyor: 345,
        ProjectId: 1
      }], {});
  },

  down: async(queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Projects', null, {});
      await queryInterface.bulkDelete('Manpowers', null, {});
      await queryInterface.bulkDelete('Site_arrangements', null, {});
      await queryInterface.bulkDelete('Safety_requirements', null, {});
      await queryInterface.bulkDelete('Temporary_services', null, {});
      await queryInterface.bulkDelete('Proffesional_service_allowances', null, {});
  }
};
