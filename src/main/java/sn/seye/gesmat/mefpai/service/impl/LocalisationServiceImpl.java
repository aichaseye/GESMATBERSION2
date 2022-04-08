package sn.seye.gesmat.mefpai.service.impl;

import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sn.seye.gesmat.mefpai.domain.Localisation;
import sn.seye.gesmat.mefpai.repository.LocalisationRepository;
import sn.seye.gesmat.mefpai.service.LocalisationService;

/**
 * Service Implementation for managing {@link Localisation}.
 */
@Service
@Transactional
public class LocalisationServiceImpl implements LocalisationService {

    private final Logger log = LoggerFactory.getLogger(LocalisationServiceImpl.class);

    private final LocalisationRepository localisationRepository;

    public LocalisationServiceImpl(LocalisationRepository localisationRepository) {
        this.localisationRepository = localisationRepository;
    }

    @Override
    public Localisation save(Localisation localisation) {
        log.debug("Request to save Localisation : {}", localisation);
        return localisationRepository.save(localisation);
    }

    @Override
    public Optional<Localisation> partialUpdate(Localisation localisation) {
        log.debug("Request to partially update Localisation : {}", localisation);

        return localisationRepository
            .findById(localisation.getId())
            .map(existingLocalisation -> {
                if (localisation.getRegion() != null) {
                    existingLocalisation.setRegion(localisation.getRegion());
                }
                if (localisation.getDepartement() != null) {
                    existingLocalisation.setDepartement(localisation.getDepartement());
                }
                if (localisation.getCommune() != null) {
                    existingLocalisation.setCommune(localisation.getCommune());
                }

                return existingLocalisation;
            })
            .map(localisationRepository::save);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Localisation> findAll(Pageable pageable) {
        log.debug("Request to get all Localisations");
        return localisationRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Localisation> findOne(Long id) {
        log.debug("Request to get Localisation : {}", id);
        return localisationRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Localisation : {}", id);
        localisationRepository.deleteById(id);
    }
}
