package sn.seye.gesmat.mefpai.domain;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import sn.seye.gesmat.mefpai.web.rest.TestUtil;

class LocalisationTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Localisation.class);
        Localisation localisation1 = new Localisation();
        localisation1.setId(1L);
        Localisation localisation2 = new Localisation();
        localisation2.setId(localisation1.getId());
        assertThat(localisation1).isEqualTo(localisation2);
        localisation2.setId(2L);
        assertThat(localisation1).isNotEqualTo(localisation2);
        localisation1.setId(null);
        assertThat(localisation1).isNotEqualTo(localisation2);
    }
}
