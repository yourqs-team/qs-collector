'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Exteriors', [{
      painting_exterior: "Owner",
      wall_cladding_type: "Modern",
      wall_cladding_work_required: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      base_cladding_type: "Fibre Cement",
      base_cladding_work_required: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      soffit_cladding_type: "Other",
      soffit_cladding_work_require: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      exterior_joinery_type: "Aluminium",
      exterior_joinery_work_required: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      entrance_door_type: "Modern",
      roof_pitch: "Strong",
      roof_cladding_type: "Corrugated",
      roof_work_required: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      gutter_material: "Plastic",
      gutter_profile: "Classic",
      downpipe_material: "Plastic",
      downpipe_profile: "Classic",
      downpipe_work_required: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      fascia_type: "Metal 150",
      ProjectId: 1,
    }], {});

    await queryInterface.bulkInsert('Hard_landscapings', [{
      deck_type: "Pine",
      deck_work_required: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      handrail_type: "Timber",
      handrail_work_required: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      paving_type: "Concrete",
      paving_work_required: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      driveway_type: "Concrete",
      driveway_work_required: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      fencing_type: "Timber Paling",
      fencing_work_required: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      other_type: "Modern",
      other_work_required: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ProjectId: 1,
    }], {});
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Exteriors', null, {});
    await queryInterface.bulkDelete('Hard_landscapings', null, {});
  }
};
